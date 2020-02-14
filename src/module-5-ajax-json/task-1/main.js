'use strict';

async function test() {
  let userPostsFetcher = new UserPostsFetcher(document.querySelector('#output'),
      'https://jsonplaceholder.typicode.com/posts?userId=4');
  await userPostsFetcher.fetch();
}

test();