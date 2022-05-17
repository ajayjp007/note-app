import "./Headspace.css"

const Headspace = () => {

    return (
        <div className="headspace-body">
            <h2 className="headspace-heading">Headspace <img className="head-space-logo" src="https://www.svgrepo.com/show/263052/idea-brain.svg" /></h2>
            <div className="headspace-tiles-container">
                <div className="tiles-headspace">
                    <p className="tiles-heading">Games</p>
                    <img className="tiles-img" src="https://images.unsplash.com/photo-1634578681002-3b744a3f7f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                    <p className="info-tiles">Key components of games are goals, rules, challenge, and interaction. Games generally involve mental or physical stimulation, and often both. Many games help develop practical skills, serve as a form of exercise, or otherwise perform an educational, simulational, or psychological role.</p>
                    <button className="tiles-btn">Start<img src="https://www.svgrepo.com/show/53698/right-arrow.svg" className="start-arrow-tiles" /></button>
                </div>
                <div className="tiles-headspace">
                    <p className="tiles-heading">Meditation</p>
                    <img className="tiles-img" src="https://images.unsplash.com/photo-1564991341890-fb26ada0f380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=914&q=80" />
                    <p className="info-tiles">Meditation is a practice in which an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state. We offer meditation classes online and offline.</p>
                    <button className="tiles-btn">Start<img src="https://www.svgrepo.com/show/53698/right-arrow.svg" className="start-arrow-tiles" /></button>
                </div>
                <div className="tiles-headspace">
                    <p className="tiles-heading">Therapy</p>
                    <img className="tiles-img" src="https://images.unsplash.com/photo-1621508638997-e30808c10653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                    <p className="info-tiles">A therapy or medical treatment is the attempted remediation of a health problem,each therapy has indications and contraindications. Not all therapies are effective. Many therapies can produce unwanted adverse effects. Our inhouse therapists are one of the best in the world. Hire therapists to talk to.</p>
                    <button className="tiles-btn">Start<img src="https://www.svgrepo.com/show/53698/right-arrow.svg" className="start-arrow-tiles" /></button>
                </div>

            </div>
        </div>
    )
}

export default Headspace
