const data = [
  {
    todoId: "123",
    createdAt: "2019-07-27T20:01:45.424Z",
    name: "Buy milk",
    dueDate: "2019-07-29T20:01:45.424Z",
    done: false,
    attachmentURL: "http://example.com/image.png"
  },
  {
    todoId: "456",
    createdAt: "2019-07-27T20:01:45.424Z",
    name: "Send a letter",
    dueDate: "2019-07-29T20:01:45.424Z",
    done: true,
    attachmentUrl: "http://example.com/image.png"
  }
]

exports.handler = async (event) => {
  return {
    statusCode: 200,

    headers: {
      'Access-Control-Allow-Origin': '*'
    },

    body: JSON.stringify({
      items: data
    })
  }
};
