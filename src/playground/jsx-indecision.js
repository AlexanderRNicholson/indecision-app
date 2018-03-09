console.log('App.js is running!');

// JSX - JavaScript XML

const titleSub = {
    title: 'Indecision App',
    subtitle: 'Computers are better than people.',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option) {
        titleSub.options.push(option);
        e.target.elements.option.value = '';
    }
    renderFormApp();
};

function getSubtitle(subtitle) {
    if (subtitle) {
        return <p>{subtitle}</p>
    }
}

const clearOptions = () => {
    titleSub.options = []
    renderFormApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * titleSub.options.length);
    const option =  titleSub.options[randomNum];
    alert(option);
    console.log(randomNum);
}

const appRoot = document.getElementById('app');

const renderFormApp = () => {
    const template = 
    <div>
        <h1>{titleSub.title}</h1> 
        {getSubtitle(titleSub.subtitle)}
        <p>{titleSub.options.length > 0 ? 'Here are your options' : 'No options for you.'}</p>
        <p>{titleSub.options.length}</p>
        <button disabled={titleSub.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={clearOptions}>Clear All</button>
   
        <ol>
            {
                titleSub.options.map((item) => {
                    return <li key={item}>Item: {item}</li>;
                })
            }
        </ol>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>

    </div>;
    ReactDOM.render(template, appRoot);
}

renderFormApp();