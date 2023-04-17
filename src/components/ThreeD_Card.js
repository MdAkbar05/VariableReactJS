import { motion } from "framer-motion";

function ThreeD_Card() {
    return (
        <div className="App">
            <motion.div
                animate={{ y: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.5 }}
            >
                <div className="card" style={{width:18 +'rem'}}>
                <img src="../img/Akbar.png" className="card-img-top p-4" alt="user"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </motion.div>
        </div>
    );
}
export default ThreeD_Card;