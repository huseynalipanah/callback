const arr = [32, 33, 12, 64, 23, 74, 88, 90, 321, 235, 856];

// Task 1

// function task1(arr, cb) {
//     let sum = 0;
//     let edort = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     edort = sum / arr.length;
  
//     cb(edort);
//   }
  
//   task1(arr, function(result) {
//     console.log(result);
//   });
  

// Task 2

// function task2(arr, cb) {
//   let cutsum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         cutsum += arr[i];
//   }
// }
// cb(cutsum);
// }
// task2(arr, function (result) {
//   console.log(result);
// });


  

// Task 3
// function task3(arr , cb) {
//     let teksum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 1) {
//       teksum += arr[i];
//     }
//     }
//     cb (teksum)
// }

// task3(arr, function(result) {
//     console.log(result);
// });

// Task 4

// function task4(arr, callback) {
//     let cutsum = 0;
//     let teksum = 0;

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) cutsum += arr[i];
//       else teksum += arr[i];
//     }

//     let hasil = teksum * cutsum;

//     callback({ cutsum, teksum, hasil });
//   }

//   task4(arr, function(result) {
//     console.log(result.hasil);
//   });
