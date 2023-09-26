import React from "react";

const Environnement = () => {
    return (
        <div className="skills__content">
        <h3 className="skills__title">Environnnement</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Linux</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Windows</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">MacOS</h3>
                        <span className="skills__level">lorem</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">iOS</h3>
                        <span className="skills__level">lorem</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Environnement;