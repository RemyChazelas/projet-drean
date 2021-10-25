import React from "react";
import "./Blog.css";
import Blog1 from '../img/blog-01.jpg';
import Blog2 from '../img/blog-02.jpg';
import Blog3 from '../img/blog-03.jpg';

function Blog() {
    return (
        <div className="blog component__space" id="Blog">

            <div className="container">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Blog1} alt="" className="project__blog" />
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="Blog__meta absolute">
                        <h5 className="project__text">Community Management</h5>
                        <h4 className="project__text">Je vous offrent une solution clé en main pour une gestion globale et optimisée de vos réseaux sociaux. Gagnez du temps et des followers !</h4>
                        <a href="#" className="blog project__btn btn">Lire Plus</a>
                    </div>
                </div>

                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Blog2} alt="" className="project__blog" />
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="Blog__meta absolute">
                        <h5 className="project__text">Création de contenu</h5>
                        <h4 className="project__text">Moi et mon équipe de production réunissant des professionnels de haut niveau subliment votre univers : photographes, vidéastes, motion designers, graphistes, artistes 3D.</h4>
                        <a href="#" className="blog project__btn btn">Lire Plus</a>
                    </div>
                </div>

                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Blog3} alt="" className="project__blog" />
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="Blog__meta absolute">
                        <h5 className="project__text">Branding</h5>
                        <h4 className="project__text">Vous souhaitez obtenir une identité de marque à la hauteur de vos ambitions ? De la création de votre logo à votre charte graphique, cap vers une nouvelle direction artistique engagée et engageante !</h4>
                        <a href="#" className="blog project__btn btn">Lire Plus</a>
                    </div>
                </div>

                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Blog3} alt="" className="project__blog" />
                        </div>
                        <div className="mask__effect"></div>
                    </div>
                    <div className="Blog__meta absolute">
                        <h5 className="project__text">Influence</h5>
                        <h4 className="project__text">Attirez de nouveaux clients grâce à ma technologie unique. Mes influenceurs vous font rayonner auprès d'importantes communautés de consommateurs.</h4>
                        <a href="#" className="blog project__btn btn">Lire Plus</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;