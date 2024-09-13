# Todo List Frontend

This repository contains the frontend code for the Todo List application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Todo List Frontend is a web application that allows users to manage their daily tasks. It is built using modern web technologies and provides a user-friendly interface for task management.

## Features

- Add, edit, and delete tasks
- Mark tasks as completed
- Filter tasks by status
- Responsive design

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/htmtmx/todolist-fe.git
cd todolist-fe
npm install
```

## Usage

To run the application locally, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

## Environment Variables

The application requires the following environment variables to be set:

- `NEXT_PUBLIC_EXPRESS_API_TODOS_URL`: The URL of the backend API for todos.
- `NEXT_PUBLIC_EXPRESS_API_USERS_URL`: The URL of the backend API for users.
- `NEXT_PUBLIC_EXPRESS_API_SUBTODOS_URL`: The URL of the backend API for subtodos.

Create a `.env` file in the root directory of the project and add the required variables:

```env
NEXT_PUBLIC_EXPRESS_API_TODOS_URL="http://localhost:4000/api/todos"
NEXT_PUBLIC_EXPRESS_API_USERS_URL="http://localhost:4000/api/auth"
NEXT_PUBLIC_EXPRESS_API_SUBTODOS_URL="http://localhost:4000/api/subtodos"
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
