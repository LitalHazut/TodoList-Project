// import db from './Config/db';

//    const getTask=(taskId: number) =>{
//     promisify(db.query, `SELECT * FROM tasks where ${taskId} == id`);
//     }
  
//    const getAllTasks=() =>{
//       return promisify(db.query, 'SELECT * FROM tasks');
//     }
  
//      const promisify=(cb: any, ...args: any[]) =>{
//       return new Promise((resolve, reject) => {
//         cb(...args, (err:string, result) => {
//           if (err) reject(err);
//           else resolve(result);
//         }); 
//     });
//     }
