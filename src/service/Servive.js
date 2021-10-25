import React from "react";
import "./Service.css";

function Service() {
    return (
        <div className="service component__space" id="Services">

            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="service__meta">
                                <h1 className="service__text">Community Management</h1>
                                <p className="p service__text p__color">
                                    Je vous offrent une solution clé en main pour une gestion globale et optimisée de vos réseaux sociaux. Gagnez du temps et des followers !
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="service__meta">
                                <h1 className="service__text">Création de contenu</h1>
                                <p className="p service__text p__color">
                                    Moi et mon équipe de production réunissant des professionnels de haut niveau subliment votre univers : photographes, vidéastes, motion designers, graphistes, artistes 3D.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="service__box pointer">
                            <div className="service__meta">
                                <h1 className="service__text">Influence</h1>
                                <p className="p service__text p__color">
                                    Attirez de nouveaux clients grâce à ma technologie unique. Mes influenceurs vous font rayonner auprès d'importantes communautés de consommateurs.
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Service;