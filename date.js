exports.getDate = function() {

const today = new Date();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
};

return today.toLocaleDateString('en-US', options);

r
};

exports.getDay = function()  {

    const today = new Date();
    
    const options = {
        weekday: 'long'
    
    };
    
    return today.toLocaleDateString('en-US', options);
    
   

    };

