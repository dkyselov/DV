'use strict';
export default function(message){
const NODE_ENV="production";
if(NODE_ENV=='development')
{
	console.log(message);
}
	alert(`Welcom ${message}`);
};
