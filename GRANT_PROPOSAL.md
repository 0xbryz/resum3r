# `resum3r`

**Name of Project:** resum3r

**Proposer:** `0xbryz`

**Do you agree to [Encode Club's Terms and Conditions](https://www.encode.club/terms-of-particpation)?:** Yes

**Do you agree to [the grant process outlined by WBW3](https://github.com/womenbuildweb3/grants/blob/main/buidl-22/process.md)?:** Yes

## Project Description

Over the past few months, we have acquired a good amount of on-chain data. From events we have attended, courses we have completed, hackathons we have won, and even projects we have donated to—there is a token that validates that on-chain. There is an opportunity to create something meaningful with our on-chain data to build our web3 presence.
resum3r collects all your on-chain data for you to design your web3 resume and then mints it as a non-transferrable NFT. It lets you pick which POAPs, Kudos, and NFTs highlight your skills and experience in the Web3 space.
With resum3r, someone can create and share a formal display of opportunities they’ve taken to participate and contribute to the Web3 ecosystem. 

## Tech Stack

- Polygon: Accessible chain that’s fast and cheap.
- Solidity: Smart contract
- Infura: To deploy the smart contract.
- The Graph: Query data from the smart contract.
- Rainbowkit: User-friendly wallet connection.
- Web3.Storage: Store the user’s resume description data.
- Ethers.js: Interact and call our smart contract.
- ENS: To resolve the user’s address.
- POAP: Retrieve the user’s POAPs.
- Lens: Retrieve the user’s Lens posts, followers, etc.
- Next.js: React-based, fast framework.


## Development Roadmap

<!-- Please break up your development work for the duration of the accelerator (11 weeks) into a clear set of meaningful milestones. -->

<!-- For each milestone, please note: -->
<!-- - The software functionality that we can expect after the completion of this milestone -->
<!-- - How many people will be working on this milestone and their roles -->
<!-- - The amount of funding required for this milestone -->
<!-- - How much time this milestone will take to achieve -->

<!-- You may use the following table to help structure each milestone -->



Milestone 1
- Summary: Design, branding and twitter page
- Team: Briseida (Design/Frontend dev)
- Budget: $3,000
- Duration: 2 weeks 

| Number | Deliverable              | Specification                                                |
| ------ | ------------------------ | ------------------------------------------------------------ |
| 1.     | UI design, UX design and branding | Design the UI components for the resume view and user flow views, like adding their skills, achievements, credentials, etc. Design a smooth user experience by maintaining consistency of the user flow throughout the journey with simple, clean layout and plenty of white space. Design logo and brand. |




Milestone 2
- Summary: Build UI components, Lens implementaton, getting started docs draft, NFT API and smart contract data structure
- Team: Briseida (Design/Frontend dev), Amidou (Full Stack dev)
- Budget: $5,000
- Duration: 2 weeks 

| Number | Deliverable              | Specification                                                |
| ------ | ------------------------ | ------------------------------------------------------------ |
| 1.     | Build UI components in Next.js | Build the UI components with a mobile-first approach, build the UI for the resume view and user flow views, integration with Lens |
| 2.     | Getting Started Documentation Draft | Start writing v0 of a Getting started documentation. |
| 3.     | Smart contract data structure | Create smart-contract data structures and required interfaces. |
| 3.     | Create NFT API | Build API to support integrating a wallet's NFTs, POAPs, and other necessary on-chain data for profile creation. Integrate initial API to post data based on contract schema. |



Milestone 3
- Summary: Deploy smart contract, create subgraph, Directory UI view and UI components
- Team: Briseida (Design/Frontend dev), Amidou (Full Stack dev)
- Budget: $5,000
- Duration: 3 weeks 

| Number | Deliverable              | Specification                                                |
| ------ | ------------------------ | ------------------------------------------------------------ |
| 1.     | Deploy smart contract | Smart contract should create an NFT with resume metadata |
| 2.     | Create subgraph | Create a subgraph for resume feed page |
| 3.     | Build feed UI view and rest of UI compnents | Show resumes that have been created and build rest of UI components |



Milestone 4
- Summary: Use web3storage or IPFS, feed view and query resum3r api and add Lens follow ability
- Team: Briseida (Design/Frontend dev), Amidou (Full Stack dev)
- Budget: $5,000
- Duration: 3 weeks 

| Number | Deliverable              | Specification                                                |
| ------ | ------------------------ | ------------------------------------------------------------ |
| 1.     | IPFS integration | Use Web3storage to save data to IPFS |
| 2.     | Finishg building feed view | Query from subgraph to add resumes from users in feed view |
| 3.     | Lens follow | Add ability to follow an user in Lens |

  
## Total Budget Requested
$20,000 USD

The remaining $2,000 USD will be used for additional costs like Web3Storage, ENS, domains/hosting, fonts, design assets/illustrations, icons, etc.

## Project Links
<!-- Please include links to wireframes, code repositories, live websites, etc that are relevant to this project. -->
GitHub repo: https://github.com/0xbryz/resum3r

## Team Members
- Briseida [Twitter](https://twitter.com/brizism)
- Amidou [Twitter](https://twitter.com/defi_metro)


<!-- 


oct 13
dec 22

(10/13—10/20 + 10/20—10/27)
(10/27—11/3 + 11/3—11/10)
(11/10—11/17 + 11/17—11/24 + 11/24—12/1)
(12/1—12/8 + 12/8—12/15 + 12/15—12/22)

connect button
create resume -> form
sorry no lens

resume form
- kudos api
- poap api
- alchemy nft api
data upload to nftdata/ipfs
create subgraph
fetch subgraph to render in frontend
make smart contract for NFT

1. design
2. form
3.  

-->