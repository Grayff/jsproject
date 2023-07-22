let nftCollection = [];


function mintNFT(name, artist, edition, description, rarity) {
  const newNFT = {
    name: name,
    artist: artist,
    edition: edition,
    description: description,
    rarity: rarity
  };
  nftCollection.push(newNFT);
}


function listNFTs() {
  console.log("List of NFTs in the collection:");
  nftCollection.forEach((nft, index) => {
    console.log(`NFT #${index + 1}:`);
    console.log("Name: " + nft.name);
    console.log("Artist: " + nft.artist);
    console.log("Edition: " + nft.edition);
    console.log("Description: " + nft.description);
    console.log("Rarity: " + nft.rarity);
    console.log("--------------------");
  });
}


function getTotalSupply() {
  return nftCollection.length;
}



mintNFT("Sunset at Sea", "Johnny Turner", "1 of 10", "A captivating digital artwork capturing the tranquil beauty of a sunset over the ocean.", "Rare");
mintNFT("Edge of Tomorrow ", "Emily Blunt", "5 of 50", "A beautiful digital artwork capturing a pivotal moment from the film.", "Uncommon");
mintNFT("Abstract Reflections", "Henry Miller ", "Limited Edition", "A digital artwork that delves into captivating realms of abstract beauty and imagination.", "Rare");
mintNFT("Virtual Pet", "Alex Taylor", "8 of 30", "A cute virtual pet to take care of.", "Uncommon")
mintNFT("Digital Artwork", "Maddie Brown", "11 of 10,000", "A beautiful piece of digital art.", "Common")


listNFTs();


console.log("Total NFTs minted: " + getTotalSupply());
