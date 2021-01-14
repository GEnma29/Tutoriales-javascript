const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else{
            reject('Whooops!');
        }
    });
};
somethingWillHappen()
   .then(response => console.log(response))
   .catch(err => console.error(err));

timeout = 2000;
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Check time');
            }, timeout);
        } else{
            reject('Whooops!');
        }
    });
};

somethingWillHappen2()
   .then(response => console.log(response))
   .catch(err => console.error(err));


   Promise.all([somethingWillHappen(), somethingWillHappen2()])
     .then(response => {
         console.log('Array of results', response);
     })
     .catch(err => {
         console.error(err);
     })
