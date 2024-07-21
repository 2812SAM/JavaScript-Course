// /* how to select any item or quiery in the document?-----------> use of */

// const element = document.getElementById('Name id ID');// this will give the whole html tag.. <h1 id='name' class='heading'>Chaqi aur Code</h1>

// now to select a perticular thing. 
// element.id;
// element.innerText // gives the absolute visible text on the console. 
// element.textContent // gives all the hidden texts aswell
// element.innerHTML // givs the whole tag including <span style="display: none;">text text</span>

// // to set any new ttribute . like we need to change the name of class .
// element.setAttribute('class','hi')

// element.style.backgroundColor='black'

// const elemets2 = document.getElementsByClassName('name of class');//gives html list. to apply ForEach loop you need to convert it into array. use Array.from(element2).

// document.querySelector(name of id , classname etc)// gives the first element of the given id,class etc with whole Tag;
// for selecting class use # and for selecting id use .(dot)


// const nodeList=document.querySelectorAll('className');
// // givs the NodeList. you can use FoeEach loop.
// nodeList[0]



// parent Child Relation. 

// use const  a = document.querySelector('.ID');
// this gives you an html tag if concerned Id
// now if you want to excess the child of that tag.
//  a.children// this is an html collection.
//  a.firstElementChild
//  a.lastElementChild

//  you can move from child to parent
//  a.parentElement
//  a.nextElementSibling

//  a.childNodes//gives a nodelist

 
//  How to Create An Element

// const div=document.createElement('div')
// div.className='main'
// div.id= '2'
// div.setAttribute('title','swayam');
// //Mentod 1-->div.innerText ="chai aur code"
// //method 2---> const text=document.createTextNode("chai ur Code")
// div.appendChild(text)

// now you have created the div. but now connect the element to document
// document.body.appendChild(div);

//*************8function to add something in html. */

function addLang(LangName){
    const newLang = document.createElement('li') // create new element
    newLang.innerText = `${LangName}`; // add inner html in that element
    document.querySelector('.id').appendChild(newLang) // append at desired place
}

// A bit more optimised funct is below

function addOptiLang(LangName){
    const newlang = document.createElement('li')//
    newlang.appendChild(document.createTextNode(LangName))// just create a text node in doc and append in newlang. rather than traversing the whole doc to enter the text in Inner Html.
    document.querySelector('.language').appendChild(newlang);
}


// how to edit values..

const lang=document.querySelector("li:nth-child(2)")
lang.innerHTML="hi"// not optimal approach

// second approach
const earlier = document.querySelector("li:nth-child(3)")
const nwLang=document.createElement('li')
nwLang.textContent="mi"
earlier.replaceWith(nwLang)

//edit
const otherlang=document.querySelector("li:first-child")
otherlang.outerHTML = '<li>TypeScript</li>'

//remove
const LastLang = document.querySelector("li:last-child")
LastLang.remove()








