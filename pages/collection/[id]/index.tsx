import { useRouter } from 'next/router';
import { StarIcon } from "@heroicons/react/20/solid";
import { item } from "@/public/assets";
import Link from 'next/link';
import { useState } from "react";
import { CardanoWallet, useWallet } from "@meshsdk/react";
import { Transaction, ForgeScript } from "@meshsdk/core";
import type { Mint, AssetMetadata } from "@meshsdk/core";


const reviews = { href: "#", average: 4, totalCount: 117 };
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}



export default function ProductDetail() {
    const router = useRouter();
    const { id } = router.query;
    const productId = typeof id === 'string' ? parseInt(id, 10) : undefined;

    const product = item.find((p) => p.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    const { connected, wallet } = useWallet();
    const [loading, setLoading] = useState<boolean>(false);
    const [txHash, setTxHash] = useState<string | null>(null);


    async function sendADA() {
        try {
            setLoading(true);
            const usedAddress = await wallet.getUsedAddresses();
            const address = usedAddress[0];
            const forgingScript = ForgeScript.withOneSignature(address);
            const tx = new Transaction({ initiator: wallet });

            if (!product) {
                alert("Product not exist");
                setLoading(false);
                return;
            }
            // define asset#1 metadata
            const assetMetadata1: AssetMetadata = {
                "name": product.name,
                "image": product.ipfs,
                "mediaType": "image/jpg",
                "description": "This NFT is minted by NFT."
            };
            const asset1: Mint = {
                assetName: product.name,
                assetQuantity: '1',
                metadata: assetMetadata1,
                label: '721',
                recipient: {
                    address: address,
                },
            };
            tx.mintAsset(
                forgingScript,
                asset1,
            )
            const priceADA = (typeof product.priceADA === 'string' ? parseInt(product.priceADA, 13) : product.priceADA) * 1000000;
            console.log(product.priceADA)
            console.log(priceADA)

            tx.sendLovelace("addr_test1qqpd4mkhc0s7wp0rhkddpn49pnxah3lmf2vek09mh76mnvvefmqycy6r2n64fwd4jny7vyeq7x8qv8247stz2cx66zjsgkevvl", priceADA.toString());

            const unsignedTx = await tx.build();
            const signedTx = await wallet.signTx(unsignedTx);
            const txHash = await wallet.submitTx(signedTx);
            setTxHash(txHash);
        } catch (error) {
            setLoading(false);
            alert("Transaction failed");
        }
    }

    return (
        <div className="bg-white">
            <div className="md:py-20 max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <img
                            src={product.image[0].src}
                            alt={product.image[0].alt}
                            className="transform duration-500 ease-in-out hover:scale-105"
                        />
                    </div>

                    <div className="flex-[1] py-3">
                        <Link href="/collection">
                            <button
                                aria-label="back-to-products "
                                className="mb-5 border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
                                justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
                            >
                                Back To All Products
                            </button>
                        </Link>
                        <div className="text-[34px] font-semibold mb-1 leading-tight">
                            {product.name}
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-5">
                            Owned by
                            <a
                                className="ml-1 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                {product.author}
                            </a>
                        </div>
                        <div className="mt-6 mb-5">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating
                                                    ? "text-gray-900"
                                                    : "text-gray-200",
                                                "h-5 w-5 flex-shrink-0"
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a
                                    href={reviews.href}
                                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            Current price
                        </div>
                        <div className="flex flex-col lg:flex-row mb-10">
                            <div className="mr-2 text-lg font-semibold">
                                {product.priceADA} ADA
                            </div>
                            <div className="flex-[1] py-1 text-md font-medium-40px text-black/[0.5]">
                                {product.priceVND}
                            </div>
                        </div>
                        <div className="text-[19px] font-semibold mb-1 leading-tight">
                            Description
                        </div>
                        <div className="text-sm font-medium text-black/[0.5]">
                            {product.description}
                        </div>
                        {/* check connect wallet */}
                        {connected ? (
                            <button
                                type="button"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => sendADA()}
                                disabled={loading}
                            >
                                {loading ? "Creating transaction..." : "Buy Now"}
                            </button>
                        ) : (
                            <div className="mt-10 flex w-full items-center justify-center">
                                <CardanoWallet />
                            </div>
                        )}
                        {txHash && (
                            <div>
                                <p>Successful, transaction hash:</p>
                                <code>{txHash}</code>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
}
