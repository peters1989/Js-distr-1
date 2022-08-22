const data = {

    color: 'red',
    width : 400,
    height : 500

};

function func (options){
     
    // let color   = options.color
    // let width   = options.width
    // let height  = options.height


    let {color, height, width} = options

    console.log(color, width, height);
}

func(data);