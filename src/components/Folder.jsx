import {motion, useDragControls} from 'framer-motion';

import topFolder from '../assets/TopFolder.svg'
import './Folder.css'
import { useAnimate } from 'framer-motion';

export const Folder = () => {
    const controls = useDragControls();
    const [folder, animate] = useAnimate();

    const handleDrag = (event, info) => {
        if(info.offset.y > -100) {
            animate(document.querySelector('.folder'), {y: 0})
        } else {
            animate(document.querySelector('.folder'), {y: -400})
        } 
    }

    return (
        <motion.div 
            className='folder'
            drag={'y'}
            dragControls={controls}
            dragListener={false}
            dragConstraints={{bottom: 0, top: -400}}
            dragElastic={0.1}
            onDragEnd={handleDrag}
            ref={folder}
        >
            <div 
                className='top-folder'
                onPointerDown={e => controls.start(e)}
            >
                <img
                    src={topFolder} 
                    className="logo react" 
                    alt="React logo"
                />
                <span className='folder-num'>
                    123
                </span>
                <span className='folder-name'>
                    Hola
                </span>
            </div>
            <div className='bottom-folder'>
                <h1>Hola mundo</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quo beatae tenetur sint ab veniam quod cum dolorum fugiat voluptates, voluptatibus mollitia possimus culpa sapiente, dolor illum illo alias sunt!
                </p>
            </div>
        </motion.div>
    )
}