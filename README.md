# Wallet Management App

![Project Logo](./assets/logo.png)

## Overview

This is a **wallet management application** built with a modern tech stack, enabling users to manage wallets, perform P2P transfers, and track transaction history. It implements ACID-compliant transactions using PostgreSQL and Prisma ORM to ensure data integrity. The application includes various screens to manage wallets, view balances, track transactions, and transfer funds securely.

---

## Features

- **User Wallet Management:** Track wallet balance in real-time.
- **Peer-to-Peer (P2P) Transfers:** Securely transfer money between users.
- **Transaction History:** Detailed view of all transactions.
- **On-Ramp Transactions:** Safely transfer funds from a bank to the wallet via webhook handling.
- **ACID Compliance:** Ensures atomic, consistent, isolated, and durable transactions.
- **Monorepo Structure:** Efficient management using Turborepo.
- **Containerized:** Ready for deployment with Docker.

---

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) with TypeScript
- **Backend API:** [Express.js](https://expressjs.com/) with TypeScript
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Monorepo Management:** [Turborepo](https://turbo.build/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/) with JWT
- **Input Validation:** [Zod](https://zod.dev/)
- **CI/CD Pipeline:** GitHub Actions for automated testing and deployment

---

## Screenshots

1. **Dashboard**  
   ![Dashboard Screenshot](./screenshots/dashboard.png)
   - View real-time wallet balance and recent activities.

2. **Transactions**  
   ![Transactions Screenshot](./screenshots/transactions.png)
   - Detailed list of all wallet transactions with filter and search options.

3. **Transfers**  
   ![Transfers Screenshot](./screenshots/transfers.png)
   - Transfer funds between wallets.

4. **P2P Transfers**  
   ![P2PTransfers Screenshot](./screenshots/p2ptransfers.png)
   - Perform peer-to-peer money transfers securely and efficiently.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) >= 16.x
- [pnpm](https://pnpm.io/) (package manager)
- [Docker](https://www.docker.com/) (Optional)
- PostgreSQL database

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wallet-management-app.git
   cd wallet-management-app
2. Install dependencies using Turborepo:

   ```bash
   npm install
3. Set up environment variables:
   - Create a .env file in the root directory with the following variables:
     ```bash
     DATABASE_URL=postgresql://username:password@localhost:5432/wallet_db
     NEXTAUTH_SECRET=your-secret-key
     NEXTAUTH_URL=http://localhost:3000
4. Apply database migrations:
   ```bash
   npm run db:migrate
5. Apply database generate commad:
   ```bash
   npm run db:generate
6. Start the development server:
   ```bash
   npm run dev

## Project Structure
  ```bash
  ├── apps
  │   ├── user-app          # Next.js application for the frontend
  │   ├── express-server    # Express.js server for handling webhooks
  │   ├── worker-service    # (Optional) Worker service for handling background jobs
  ├── packages
  │   ├── db                # Prisma ORM setup for database
  │   ├── ui                # Reusable UI components
  │   ├── eslint-config     # Shared ESLint configuration
  │   ├── typescript-config # Shared TypeScript configurations
  └── turbo.json            # Turborepo configuration

## Usage
- Dashboard: View your wallet's balance and activity at a glance.
- Transactions: Check all transaction details, including date, amount, and status.
- Transfers: Transfer money between your wallets.
- P2P Transfers: Transfer money to other users securely and track these transfers in real-time.


   
   
