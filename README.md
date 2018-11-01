# Redux intro
Time to learn how to use Redux to manage your app state, and how to integrate Redux with React!

You can think of Redux as a client-side database that contains all the data required to generate your views. This can feel a bit as an overkill for a small app, but becomes useful as your app scales.

## Learning objectives

While you are going through the exercise, keep in mind the following learning objectives. If by the end you don’t feel you have accomplished these objectives, please reach out to an instructor or TA.
1. Understand and use Redux components: Actions, Store, Reducers, State.
2. Handle async actions with and without middleware.
3. Integrate React with Redux.

## Getting started

1. Install the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).
2. Run `npm i` to install the local dependencies.
3. Run the tests using `npm test`. These tests have a watcher that automatically re-runs them on any file change. You can work on the action creators and reducers by looking at the tests only.
4. Once both action creators and reducers are done, run your server with `npm start` and implement the interface requirements.

## Tasks

Follow best practices such as commenting your code, committing often and being mindful of indentation. Make sure to lint your code before committing, as this will help your work look professional.

1. **Build a counter**.
    - It needs to have two buttons (`+` and `-`), that respectively increase and decrease the counter by one.
    - A text field should display the up-to-date count.
2. **Build a to-do app**.
    - It has a text input field with a button for adding a task.
    - It shows an up-to-date list of all the tasks.

## Extra credits
Add a “completed task” feature so you can cross off items once they have been completed.