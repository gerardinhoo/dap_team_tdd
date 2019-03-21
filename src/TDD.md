Test Driven Development In React

## What is Test Driven Development?

Test Driven Development is a way to achieve both good quality code and good test coverage
In Test Driven Development we are not allowed to write any production code unless we are writing it to make a failing unit test pass.

## Test Driven Development Patters

Test Driven Development follows the Red - Green - Refactor cycle
Red Stage => We should write a test that describes how our app should behave.
Green Stage => We should write a code to make the test pass
Refactor Stage => We should improve the implementation opf our code without changing its behavior.

## What are some steps we can take to proceed with Test Driven Development

1. We have study to study the wireframe of the app and play with it
2. We have review the acceptance criteria
3. Once we know how our app should behave then we can write our first failing test.

### What are the tools we need to test driven our React Applications

We need Jest, enzyme

## Jest

Jest is a Javascript testing library created by Facebook. It's used to test web apss, mobile apps or node applications. it's used by big companies such Twitter or airbnb.
It automatically comes with Create-react-app

## Enzyme

Enzyme is JavaScript testing library created by AirBnb that makes it easier to test our React Components.
Enzyme provide us with three interface API.

Shallow, mount and render

Shallow => It test individual components. It's mostly used in Unit test
Mount => Tests the interactions between multiple components. Test components with react lifecycle. Mostly used in Integration test.
Render => Renders react components to static HTML.

## Data attributes

Data Attributes are a way to store a data. They are an alternative for css selectors such as classes and ID's. It's recommended to use data-attributes over css selectors
Because they be removed or changed without our knowledge and that can break our tests.
They start with the word data.
Example: data-location
