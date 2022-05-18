import "./Status.css"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Status() {
    return (
        <section className="status container" data-aos="fade-up">
            <VisibilitySensor>
                {({ isVisible }) => (
                    <>
                        <div className="status-item">
                            <CountUp
                                start={0}
                                end={1500}
                                duration={3}
                            >
                                {({ countUpRef, start }) => (
                                    <div>
                                        {isVisible && start()}
                                        <span className="count-up" ref={countUpRef} />
                                        <span className="count-up-suffix">+</span>
                                    </div>
                                )}
                            </CountUp>
                            <h5>Acres Of Forests</h5>
                        </div>
                        <div className="status-item">
                            <CountUp
                                start={0}
                                end={1160}
                                duration={3}
                            >
                                {({ countUpRef, start }) => (
                                    <div>
                                        {isVisible && start()}
                                        <span className="count-up" ref={countUpRef} />
                                        <span className="count-up-suffix">+</span>
                                    </div>
                                )}
                            </CountUp>
                            <h5>Million People</h5>
                        </div>
                        <div className="status-item">
                            <CountUp
                                start={0}
                                end={1145}
                                duration={3}
                            >
                                {({ countUpRef, start }) => (
                                    <div>
                                        {isVisible && start()}
                                        <span className="count-up" ref={countUpRef} />
                                        <span className="count-up-suffix">k</span>
                                    </div>
                                )}
                            </CountUp>
                            <h5>Thousand Hectares</h5>
                        </div>
                        <div className="status-item">
                            <CountUp
                                start={0}
                                end={1145}
                                duration={3}
                            >
                                {({ countUpRef, start }) => (
                                    <div>
                                        {isVisible && start()}
                                        <span className="count-up" ref={countUpRef} />
                                        <span className="count-up-suffix">k</span>
                                    </div>
                                )}
                            </CountUp>
                            <h5>Thousand Hectares</h5>
                        </div>
                    </>
                )}
            </VisibilitySensor>
        </section>
    )
}

export default Status
