# JavaScript Network Tasks

This repository contains JavaScript scripts to perform various network-related tasks. Each task is explained below, along with the corresponding script file and usage instructions.

## Task 0: Status Code
**File**: `0-statuscode.js`

This script displays the status code of a GET request to a given URL using the `request` module.

### Usage:
```bash
node 0-statuscode.js <URL>
```

Example:
```bash
node 0-statuscode.js https://intranet.alxswe.com/status
# Output: code: 200

node 0-statuscode.js https://intranet.alxswe.com/doesnt_exist
# Output: code: 404
```

## Task 1: Star Wars Movie Title
**File**: `1-starwars_title.js`

This script prints the title of a Star Wars movie based on the provided movie ID using the Star Wars API and the `request` module.

### Usage:
```bash
node 1-starwars_title.js <MovieID>
```

Example:
```bash
node 1-starwars_title.js 1
# Output: A New Hope

node 1-starwars_title.js 5
# Output: Attack of the Clones
```

## Task 2: Star Wars Wedge Antilles
**File**: `2-starwars_count.js`

This script prints the number of movies where the character "Wedge Antilles" is present using the Star Wars API and the `request` module.

### Usage:
```bash
node 2-starwars_count.js <APIURL>
```

Example:
```bash
node 2-starwars_count.js https://swapi-api.alx-tools.com/api/films
# Output: 3
```

## Task 3: Loripsum
**File**: `3-request_store.js`

This script fetches the contents of a webpage and stores it in a file with UTF-8 encoding using the `request` module.

### Usage:
```bash
node 3-request_store.js <URL> <FilePath>
```

Example:
```bash
node 3-request_store.js http://loripsum.net/api loripsum
# Output: Contents of the webpage are stored in 'loripsum' file.
```

## Task 4: How Many Completed?
**File**: `4-completed_tasks.js`

This script computes the number of tasks completed by user ID from a given API URL and prints the results using the `request` module.

### Usage:
```bash
node 4-completed_tasks.js <APIURL>
```

Example:
```bash
node 4-completed_tasks.js https://jsonplaceholder.typicode.com/todos
# Output: A JSON object with the count of completed tasks for each user ID.
```

## Task 5: Who Was Playing in This Movie?
**File**: `5-starwars_characters.js`

This script prints all characters of a Star Wars movie based on the provided movie ID using the Star Wars API and the `request` module.

### Usage:
```bash
node 5-starwars_characters.js <MovieID>
```

Example:
```bash
node 5-starwars_characters.js 3
# Output: List of characters in the specified Star Wars movie.
```

Feel free to use these scripts to perform the mentioned network tasks in JavaScript. Each script is self-contained and can be executed independently.
