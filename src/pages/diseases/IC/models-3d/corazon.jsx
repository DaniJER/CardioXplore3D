import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { useGLTF, useAnimations, PositionalAudio } from '@react-three/drei';

export const ModelCorazon = forwardRef((props, ref) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/models-3d/IC/corazon.glb');
    const { actions } = useAnimations(animations, group);
    const firstAction = useRef(null);
    const audioRef = useRef();

    const handleClick = () => {
        audioRef.current?.play();
        audioRef.current.volume = 1;
        //Detener despues de 6 segundos
        setTimeout(() => {
            audioRef.current?.stop();
        }, 5000);
    };

    useEffect(() => {
        if (actions && Object.keys(actions).length > 0) {
            const name = Object.keys(actions)[0];
            firstAction.current = actions[name];
            firstAction.current.play();
        }
    }, [actions]);

    useImperativeHandle(ref, () => ({
        play: () => firstAction.current?.play(),
        pause: () => {
            if (firstAction.current) firstAction.current.paused = true;
        },
        resume: () => {
            if (firstAction.current) firstAction.current.paused = false;
        },
        isPaused: () => firstAction.current?.paused ?? false,
    }));

    return (
        <group ref={group} {...props} dispose={null} onClick={handleClick}>
            <PositionalAudio
                ref={audioRef}
                url={props.Audio}
                distance={5}
                loop={false}
            />
            <group name="Scene">
                <group name="Sketchfab_model">
                    <group
                        name="895dcee26d5042b5986fee64f039ce27fbx"

                        scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Armatu" scale={100}>
                                    <group name="Object_5">
                                        <skinnedMesh
                                            name="0"
                                            geometry={nodes['0'].geometry}
                                            material={materials.Heart_Tex}
                                            skeleton={nodes['0'].skeleton}
                                            morphTargetDictionary={nodes['0'].morphTargetDictionary}
                                            morphTargetInfluences={nodes['0'].morphTargetInfluences}
                                        />
                                        <group name="Object_12" position={[0, 69.74, 0]} scale={39.789} />
                                        <group name="Object_13" />
                                        <primitive object={nodes._rootJoint} />
                                    </group>
                                </group>
                                <group name="hart" position={[0, 69.74, 0]} scale={39.789} />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
});

useGLTF.preload('/models-3d/IC/corazon.glb');