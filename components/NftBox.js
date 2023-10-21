import { Image } from "@nextui-org/react";

export default function NftBox({ metadata, renderButton }) {
  if (!metadata) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{metadata.name}</h3>
      <p>{metadata.description}</p>
      <Image
      isZoomed
      width={240}
      alt="NextUI Fruit Image with Zoom"
      src={metadata.image}
    />
      {renderButton(metadata)} 
    </div>
  );
}