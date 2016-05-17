
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
	var array = [];
	for ( var i = 0; i < collection_a.length; i++){
		for ( var j in object_b.value) {
			if (collection_a[i].key === object_b.value[j]) 
				array.push(collection_a[i].key); 
		}
	}
	return array;
}

module.exports = collect_same_elements;
