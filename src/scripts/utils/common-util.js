module.exports = {
	randerBody : function( str ){
		$('body').html( str );
	},
	addCart: function( sp ){
		var oldSp = store('cart');
		var cursp = {
				type: sp.type,
				name: sp.name,
				price: sp.price,
				img: sp.imgs[0],
				id: sp.id,
				sum: 1
			}
		if(!oldSp){
			oldSp = [];
			oldSp.push(cursp);
		} else{
			oldSp = JSON.parse( oldSp);
			for(var i =0; i< oldSp.length ; i++){
				if( oldSp[i].id = cursp.id){
					oldSp[i].sum++;
					break;
				}
			}
			if( i == oldSp.length ){
				oldSp.push(cursp);
			}
		}
		store('cart' , JSON.stringify( oldSp) );
	}
	
}
