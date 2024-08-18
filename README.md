## Description

This is an API that solves the “Water Bucket Challenge” test through a basic REST API where the response or result is generated through a JSON response.

## Features

-   **Node**: Environment that allows server-side javascript execution.
-   **Express**: Library to manage the routes of the app.
-   **TypeScript**: Programming language selected to work on the project due to the great advantages it offers when detecting possible errors at development time.

## Prerequisites

Make sure you have the following tools installed on your system:

-   [Node.js](https://nodejs.org/) (version 14 or higher)
-   [npm](https://www.npmjs.com/) as a package manager

## Installation

Follow these steps to set up the project in your local environment:

1. **Clone the repository:**

    \`\`\`bash
    git clone https://github.com/alpachm/WaterBucketChallenge.git
    cd FrontendChickens
    \`\`\`

2. **Install dependencies:**

    With npm:

    \`\`\`bash
    npm install
    \`\`\`

## Script to run locally

The following script must be executed:

### \`npm run start:dev\`

## API Usage

The API accepts POST requests on the path http://localhost:8002/api/v1/. The request must contain a JSON with the capacities of the jugs and the desired amount of water. Below is an example of the request payload and the API response.

## Request body

{
"x_capacity": 2,
"y_capacity": 10,
"z_amount_wanted": 4
}

## Sample Response

{
"solution": [
{"step": 1, "bucketX": 2, "bucketY": 0, "action": "Fill bucket X"},
{"step": 2, "bucketX": 0, "bucketY": 2, "action": "Transfer from bucket X to Y"},
{"step": 3, "bucketX": 2, "bucketY": 2, "action": "Fill bucket X"},
{"step": 4, "bucketX": 0, "bucketY": 4, "action": "Transfer from bucket X to Y", "status": "Solved"}
]
}

# WaterBucketChallenge

# WaterBucketChallenge
