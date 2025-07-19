# Product Catalog API

A TypeScript Express.js API for managing and querying product catalogs with pagination, sorting, and search functionality.

## Features

- **Product Listing**: Get paginated products with sorting options
- **Product Search**: Search products with query parameters
- **TypeScript**: Fully typed API with strict type checking
- **CORS Support**: Cross-origin resource sharing enabled
- **Error Handling**: Comprehensive error responses

## API Endpoints

### GET /products

Retrieve a paginated list of products with sorting options.

**Query Parameters:**
- `limit` (required): Number of products per page
- `page` (required): Page number (0-indexed)
- `sortBy` (optional): Sort field, defaults to 'sku'
- `sortByDirection` (optional): Sort direction ('asc' or 'desc'), defaults to 'desc'

**Example:**
```bash
GET /products?limit=10&page=0&sortBy=name&sortByDirection=asc
```

### GET /products/search

Search for products using a query string.

**Query Parameters:**
- `q` (required): Search query string
- `limit` (required): Number of products per page
- `page` (required): Page number (0-indexed)

**Example:**
```bash
GET /products/search?q=laptop&limit=5&page=0
```

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd product-catalog-api

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server with hot reload
pnpm dev
```

The server will start at `http://localhost:3000`

### Production

```bash
# Build the project
pnpm build

# Start production server
pnpm serve
```

## Project Structure

```
src/
├── error/                 # Error handling utilities
├── lib/                   # Shared constants and utilities
├── mock-api/             # Mock API implementations
├── types/                # TypeScript type definitions
└── index.ts              # Express server setup
```

## Technologies

- **Express.js** - Web framework
- **TypeScript** - Type safety
- **CORS** - Cross-origin support
- **ts-node** - Development execution
- **tsc-alias** - Path alias resolution

## License

ISC