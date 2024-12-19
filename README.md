# BetOdds

A real-time sports betting application that provides live odds updates and betting capabilities using TypeScript, Express.js, Socket.IO, and Kafka.

## Features

- 🚀 Real-time odds updates via WebSocket
- 📊 Live betting functionality
- 🔄 Kafka message streaming
- 🔒 Secure authentication system
- 📱 RESTful API endpoints
- 🐳 Docker containerization
- 💪 Strong TypeScript typing

## Project Structure

```
betodds/
├── .husky/              # Git hooks configuration
├── .vscode/             # VS Code specific settings
├── dist/                # Compiled output
├── node_modules/        # Project dependencies
├── src/                 # Source code
├── .env                 # Environment variables
├── .gitignore          # Git ignore rules
├── app-types.d.ts      # Application type declarations
├── biome.json          # Biome configuration
├── docker-compose.yml  # Docker compose configuration
├── Dockerfile          # Docker build instructions
├── package.json        # Project metadata and dependencies
├── README.md           # Project documentation
├── test-client.html    # Test client
├── tsconfig.json       # TypeScript configuration
└── yarn.lock           # Yarn dependency lock file
```

## Prerequisites

- Node.js (v20 or higher)
- Yarn package manager
- Docker and Docker Compose
- Kafka

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/betodds.git
cd betodds
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
PORT=4000
ENV=development
```

## Development

Start the development server:
```bash
yarn dev
```

The server will start on `http://localhost:4000` with hot reloading enabled.

## Docker Setup

1. Build and start the containers:
```bash
docker-compose up -d --build
```

2. Stop the containers:
```bash
docker-compose down 
```

## Available Scripts

- `yarn dev`: Start development server
- `yarn build`: Build for production
- `yarn start`: Start production server
- `yarn lint`: Run Biome linter
- `yarn test`: Run tests
- `yarn prepare`: Install Husky hooks

## API Endpoints

### Authentication
- `POST /v1/api/auth/login`: User login
- `POST /v1/api/auth/signup`: User registration

### Betting
- `GET /v1/api/odds/live`: Get live odds
- `POST /v1/api/bets`: Place a bet
- `GET /v1/api/bets/history`: Get betting history



## Testing

Run the test suite:
```bash
yarn test
```

For test coverage:
```bash
yarn test:coverage
```

## Deployment

1. Build the application:
```bash
yarn build
```

2. Start the production server:
```bash
yarn start
```

## Built With

- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Express.js](https://expressjs.com/) - Web framework
- [Socket.IO](https://socket.io/) - Real-time engine
- [Kafka](https://kafka.apache.org/) - Message streaming
- [Biome](https://biomejs.dev/) - Linting and formatting
- [Docker](https://www.docker.com/) - Containerization

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape BetOdds
- Special thanks to the open-source community

## Support

For support, email nicholaschunrayne@gmail.com or open an issue in the repository.