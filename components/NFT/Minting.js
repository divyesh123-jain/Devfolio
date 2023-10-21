import { useEffect, useState } from "react";
import axios from "axios"; // You can use axios to make HTTP requests
import { Image } from "@nextui-org/react";

// export default function NftBox({ src }) {
//   return (
//     <div>
//       <Image width={300} alt="NFT Image" src={src} />
//     </div>
//   );
// }
export default function NftBox({ ipfsUrl }) {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    // Fetch metadata from the IPFS URL
    async function fetchMetadata() {
      try {
        const response = await axios.get(ipfsUrl); // Fetch the metadata from IPFS
        const data = response.data;
        setMetadata(data);
      } catch (error) {
        console.error("Error fetching metadata:", error);
      }
    }

    if (ipfsUrl) {
      fetchMetadata();
    }
  }, [ipfsUrl]);

  if (!metadata) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{metadata.name}</h3>
      <p>{metadata.description}</p>
      <Image width={300} alt="NFT Image" src={metadata.image} />
    </div>
  );
}