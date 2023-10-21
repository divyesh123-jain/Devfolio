import { Image } from "@nextui-org/react";

export default function NftBox({ metadata, renderButton }) {
  if (!metadata) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{metadata.name}</h3>
      <p>{metadata.description}</p>
      <Image width={300} alt="NFT Image" src={metadata.image} />
      {renderButton(metadata)} // Pass metadata to renderButton
    </div>
  );
}