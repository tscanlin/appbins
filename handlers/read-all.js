'use strict';

const AWS = require('aws-sdk');
const S3 = new AWS.S3({
  endpoint: 'http://localhost:4568',
  s3ForcePathStyle: true,
  sslEnabled: false,
});
const config = require('../serverlessConfig.js');

module.exports = (event, callback) => {
  S3.listObjectsV2({
    Bucket: config.custom.folderName,
  }, (err, res) => {
    if (res.Contents) {
      const length = res.Contents.length
      let count = 0
      res.FileContents = {}
      res.Contents.forEach((item) => {
        const key = item.Key
        S3.getObject({
          Bucket: config.custom.folderName,
          Key: key,
        }, (err, data) => {
          count++
          data.body = data.Body.toString()
          res.FileContents[key] = data
          if (count === length) {
            callback(err, res);
          }
        })
      })
    } else {
      callback(err, res);
    }
  })

  // const params = {
  //   TableName: 'todos',
  //   region: 'us-east-1'
  // };
  //
  // const s3bucket = {
  //   Bucket: 'todos-new',
  // }
  // const s3params = {
  //   Bucket: 'todos-new',
  //   Key: 'a/test1',
  //   Body: 'something else!!!'
  // }
  // const s3GetParams = {
  //   Bucket: 'todos-new',
  //   Key: 'a/test1',
  // }
  // console.log('test');

  // S3.createBucket(s3bucket, (err, d) => {
  //   console.log(err, d);
  //   // console.log(d.Body.toString());
  // })
  // var start = +new Date();

  // return S3.upload(s3params, (err, data) => {
  //   console.log(err, data);
  //   console.log(+new Date() - start);
  //
  //   return S3.listObjectsV2(s3bucket, (err, data) => {
  //     console.log('list it!');
  //     console.log(err, data);
  //     console.log(+new Date() - start);
  //
  //     return S3.getObject(s3GetParams, (err, data) => {
  //       console.log('get it!');
  //       console.log(err, data);
  //       console.log(+new Date() - start);
  //       // console.log(data.Body.toString());
  //
  //       dynamoDb.scan(params, (error, data) => {
  //         if (error) {
  //           console.log(error);
  //         }
  //         console.log(error, data.Items);
  //         console.log(+new Date() - start);
  //         callback(error, data)
  //       });
  //     })
  //   })
  // })

};
