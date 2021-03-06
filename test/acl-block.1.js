'use strict';

module.exports = [{
  'role': 'repl',
  'paths': [
    {
      'path': '/',
      'verbs': ['GET']
    },
    {
      'path': '/{:db}',
      'verbs': ['GET']
    },
    {
      'path': '/{:db}/_all_docs',
      'verbs': ['GET', 'HEAD', 'POST']
    },
    {
      'path': '/{:db}/_changes',
      'verbs': ['GET', 'POST']
    },
    {
      'path': '/{:db}/_bulk_get',
      'verbs': ['POST']
    },
    {
      'path': '/{:db}/_revs_diff',
      'verbs': ['POST']
    },
    {
      'path': '/{:db}/{:id}',
      'verbs': ['GET']
    },
    {
      'path': '/{:db}/{:id}/{:attachmentId}',
      'verbs': ['GET']
    },
    {
      'path': '/{:db}/_local/{:id}',
      'verbs': ['GET', 'PUT', 'DELETE']
    },
    {
      'path': '/{:db}/_local/thali_{:id}',
      'verbs': ['GET', 'PUT', 'DELETE']
    }
  ]
}];
