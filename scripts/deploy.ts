import { ethers } from 'hardhat';
import 'dotenv/config';

async function main(): Promise<void> {
    const [deployer] = await ethers.getSigners();

    console.log(`Deploying contract with account: ${deployer.address}`);

    const Token = await ethers.getContractFactory('Discoin');
    const token = await Token.deploy();

    await token.deployed();

    console.log(`Discoin deployed to: ${token.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
