import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, Circle } from '@react-three/drei'
import * as THREE from 'three'

export function ModeloQuiz(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/Quiz/ModelPruebas.glb')
  const { actions } = useAnimations(animations, group)
  const [currentAction, setCurrentAction] = useState(null)

  // Secuencia automática al montar el componente
  useEffect(() => {
    if (!actions.Entry || !actions.Saludar || !actions.Idle) return;

    // Cambiar a "Entry" para animaciones
    setCurrentAction("Entry"); 
  }, [actions]);

  useEffect(() => {
    if (!currentAction || !actions[currentAction]) return;

    let cleanup = () => { };
    if (currentAction === "Entry") {
      actions.Entry.reset().setLoop(THREE.LoopOnce, 1).play();
      actions.Entry.clampWhenFinished = true;
      const onEntryFinished = () => setCurrentAction("Saludar");
      actions.Entry.getMixer().addEventListener('finished', onEntryFinished);
      cleanup = () => {
        actions.Entry.getMixer().removeEventListener('finished', onEntryFinished);
        actions.Entry.fadeOut(0.5).stop();
      };
    } else if (currentAction === "Saludar") {
      actions.Saludar.reset().setLoop(THREE.LoopOnce, 1).play();
      actions.Saludar.clampWhenFinished = true;
      const onSaludarFinished = () => {
        setCurrentAction("Idle");
        // Notificar que las animaciones iniciales han terminado
        if (props.onAnimationsComplete) {
          props.onAnimationsComplete();
        }
      };
      actions.Saludar.getMixer().addEventListener('finished', onSaludarFinished);
      cleanup = () => {
        actions.Saludar.getMixer().removeEventListener('finished', onSaludarFinished);
        actions.Saludar.stop();
      };
    } else if (currentAction === "Idle") {
      actions.Idle.reset().setLoop(THREE.LoopRepeat).play();
      cleanup = () => {
        actions.Idle.fadeOut(0.5).stop();
      };
    }
    return cleanup;
  }, [actions, currentAction]);

  const handleHitboxClick = (e, name) => {
    e.stopPropagation();
    if (e.object?.userData?.isHitbox) {
      if (props.onObjectClick) {
        props.onObjectClick(name); // "Pecho", "Abdomen", etc.
      }
    }
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">


          {/* HITBOXES */}

          <mesh
            name='Cabeza'
            userData={{ isHitbox: true }}
            position={[0, 186, 4]}
            rotation={[0, 0, 0]}
            scale={[8, 11, 8]}
            onClick={(e) => handleHitboxClick(e, 'Cabeza')}
          >
            <sphereGeometry />
            {/* <meshBasicMaterial color="rgba(255, 0, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Ojo derecho'
            userData={{ isHitbox: true }}
            position={[3.7, 189.5, 12]}
            rotation={[0, 0, 0]}
            scale={[2, 2, 2]}
            onClick={(e) => handleHitboxClick(e, 'Ojos')}
          >
            <sphereGeometry />
            {/* <meshBasicMaterial color="rgba(0, 204, 255, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Ojo izquierdo'
            userData={{ isHitbox: true }}
            position={[-3.7, 189.5, 12]}
            rotation={[0, 0, 0]}
            scale={[2, 2, 2]}
            onClick={(e) => handleHitboxClick(e, 'Ojos')}
          >
            <sphereGeometry />
            {/* <meshBasicMaterial color="rgba(0, 204, 255, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Oreja derecha'
            userData={{ isHitbox: true }}
            position={[8, 187.7, 4]}
            rotation={[0, 0, 0]}
            scale={[4, 4, 4]}
            onClick={(e) => handleHitboxClick(e, 'Orejas')}
          >
            <sphereGeometry />
            {/* <meshBasicMaterial color="rgba(255, 230, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Oreja izquierda'
            userData={{ isHitbox: true }}
            position={[- 8, 187.7, 4]}
            rotation={[0, 0, 0]}
            scale={[4, 4, 4]}
            onClick={(e) => handleHitboxClick(e, 'Orejas')}
          >
            <sphereGeometry />
            {/* <meshBasicMaterial color="rgba(255, 230, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>


          <mesh
            name='Nariz'
            userData={{ isHitbox: true }}
            position={[0, 187, 15]}
            rotation={[0, 0, 0]}
            scale={[4, 7, 3]}
            onClick={(e) => handleHitboxClick(e, 'Nariz')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(225, 0, 255, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Boca'
            userData={{ isHitbox: true }}
            position={[0, 181.5, 15]}
            rotation={[0, 0, 0]}
            scale={[6, 2, 3]}
            onClick={(e) => handleHitboxClick(e, 'Boca')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(0, 255, 21, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Cuello'
            userData={{ isHitbox: true }}
            position={[0, 172, -1]}
            rotation={[0, 0, 0]}
            scale={[12, 6, 17]}
            onClick={(e) => handleHitboxClick(e, 'Cuello')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(238, 255, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Pecho'
            userData={{ isHitbox: true }}
            position={[0, 155, -1]}
            rotation={[0, 0, 0]}
            scale={[36, 30, 16]}
            onClick={(e) => handleHitboxClick(e, 'Pecho')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(255, 0, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Espalda'
            userData={{ isHitbox: true }}
            position={[0, 138, -10]}
            rotation={[0, 0, 0]}
            scale={[36, 68, 2]}
            onClick={(e) => handleHitboxClick(e, 'Espalda')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(0, 255, 234, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Hombro Derecho'
            userData={{ isHitbox: true }}
            position={[24, 162, -1]}
            rotation={[0, 0, 0]}
            scale={[12, 12, 16]}
            onClick={(e) => handleHitboxClick(e, 'Hombros')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(238, 255, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Hombro Izquierdo'
            userData={{ isHitbox: true }}
            position={[-24, 162, -1]}
            rotation={[0, 0, 0]}
            scale={[12, 12, 16]}
            onClick={(e) => handleHitboxClick(e, 'Hombros')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(238, 255, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Brazo Derecho'
            userData={{ isHitbox: true }}
            position={[24, 145.7, -1]}
            rotation={[0, 0, 0]}
            scale={[12, 20.4, 16]}
            onClick={(e) => handleHitboxClick(e, 'Brazos')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(17, 0, 255, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Brazo Izquierdo'
            userData={{ isHitbox: true }}
            position={[-24, 145.7, -1]}
            rotation={[0, 0, 0]}
            scale={[12, 20.4, 16]}
            onClick={(e) => handleHitboxClick(e, 'Brazos')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(17, 0, 255, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Codo Derecho'
            userData={{ isHitbox: true }}
            position={[27, 130.5, -1]}
            rotation={[0, 0, 0]}
            scale={[11, 10, 16]}
            onClick={(e) => handleHitboxClick(e, 'Codos')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(255, 230, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Codo Izquierdo'
            userData={{ isHitbox: true }}
            position={[-27, 130.5, -1]}
            rotation={[0, 0, 0]}
            scale={[11, 10, 16]}
            onClick={(e) => handleHitboxClick(e, 'Codos')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(255, 230, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Antebrazo Derecho'
            userData={{ isHitbox: true }}
            position={[29, 114.5, -1]}
            rotation={[0, 0, 0.2]}
            scale={[11, 22, 16]}
            onClick={(e) => handleHitboxClick(e, 'Antebrazos')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(255, 0, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Antebrazo Izquierdo'
            userData={{ isHitbox: true }}
            position={[-29, 114.5, -1]}
            rotation={[0, 0, -0.2]}
            scale={[11, 22, 16]}
            onClick={(e) => handleHitboxClick(e, 'Antebrazos')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(255, 0, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Muñeca Derecho'
            userData={{ isHitbox: true }}
            position={[31, 101, -1]}
            rotation={[0, 0, 0.2]}
            scale={[11, 5.5, 16]}
            onClick={(e) => handleHitboxClick(e, 'Muñecas')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(0, 255, 21, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Muñeca Izquierdo'
            userData={{ isHitbox: true }}
            position={[-31, 101, -1]}
            rotation={[0, 0, -0.2]}
            scale={[11, 5.5, 16]}
            onClick={(e) => handleHitboxClick(e, 'Muñecas')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(0, 255, 21, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Mano Derecho'
            userData={{ isHitbox: true }}
            position={[28.8, 89, -1]}
            rotation={[0, 0, -0.1]}
            scale={[12, 22, 20]}
            onClick={(e) => handleHitboxClick(e, 'Manos')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(0, 26, 255, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Mano Izquierda'
            userData={{ isHitbox: true }}
            position={[-28.8, 89, -1]}
            rotation={[0, 0, 0.1]}
            scale={[12, 22, 20]}
            onClick={(e) => handleHitboxClick(e, 'Manos')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(0, 26, 255, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Abdomen'
            userData={{ isHitbox: true }}
            position={[0, 122.5, -1]}
            rotation={[0, 0, 0]}
            scale={[36, 35, 16]}
            onClick={(e) => handleHitboxClick(e, 'Abdomen')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(0, 255, 55, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Pierna Izquierda'
            userData={{ isHitbox: true }}
            position={[0, 100, -1]}
            rotation={[0, 0, 0]}
            scale={[45, 10, 16]}
            onClick={(e) => handleHitboxClick(e, 'Cintura')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(38, 0, 255, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Pierna Izquierda'
            userData={{ isHitbox: true }}
            position={[-16, 75, -1]}
            rotation={[0, 0, -0.2]}
            scale={[20, 40, 17]}
            onClick={(e) => handleHitboxClick(e, 'Piernas')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(9, 255, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Pierna Derecha'
            userData={{ isHitbox: true }}
            position={[16, 75, -1]}
            rotation={[0, 0, 0.2]}
            scale={[20, 40, 17]}
            onClick={(e) => handleHitboxClick(e, 'Piernas')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(9, 255, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Rodilla Izquierda'
            userData={{ isHitbox: true }}
            position={[-20, 52, -1]}
            rotation={[0, 0, 0]}
            scale={[15, 10, 20]}
            onClick={(e) => handleHitboxClick(e, 'Rodillas')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="#ff9800" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Rodilla Derecha'
            userData={{ isHitbox: true }}
            position={[20, 52, -1]}
            rotation={[0, 0, 0]}
            scale={[15, 10, 20]}
            onClick={(e) => handleHitboxClick(e, 'Rodillas')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="#ff9800" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Pantorilla Derecha'
            userData={{ isHitbox: true }}
            position={[23, 27.6, -1]}
            rotation={[0, 0, 0.1]}
            scale={[15, 40, 15]}
            onClick={(e) => handleHitboxClick(e, 'Pantorrilla')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(9, 255, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Pantorilla Izquierda'
            userData={{ isHitbox: true }}
            position={[-23, 27.6, -1]}
            rotation={[0, 0, -0.1]}
            scale={[15, 40, 15]}
            onClick={(e) => handleHitboxClick(e, 'Pantorrilla')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="rgba(9, 255, 0, 1)" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Pie Derecho'
            userData={{ isHitbox: true }}
            position={[27.5, 5, 6]}
            rotation={[0, 0, 0]}
            scale={[17, 14, 31]}
            onClick={(e) => handleHitboxClick(e, 'Pies')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="#ff9800" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            name='Pie Izquierdo'
            userData={{ isHitbox: true }}
            position={[-29, 5, 6]}
            rotation={[0, 0, 0]}
            scale={[17, 14, 31]}
            onClick={(e) => handleHitboxClick(e, 'Pies')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="#ff9800" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <mesh
            userData={{ isHitbox: true }}
            position={[-29, 5, 6]}
            rotation={[0, 0, 0]}
            scale={[17, 14, 31]}
            onClick={(e) => handleHitboxClick(e, 'Pies')}
          >
            <boxGeometry />
            {/* <meshBasicMaterial color="#ff9800" /> */}
            <meshBasicMaterial transparent opacity={0} />
          </mesh>


          {/* Mesh del modelo 3d */}
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.BodyMaterial}
            skeleton={nodes.Body.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Bottoms"
            geometry={nodes.Bottoms.geometry}
            material={materials.BottomMaterial}
            skeleton={nodes.Bottoms.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Eyes"
            geometry={nodes.Eyes.geometry}
            material={materials.BodyMaterial}
            skeleton={nodes.Eyes.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Hair"
            geometry={nodes.Hair.geometry}
            material={materials.HairMaterial}
            skeleton={nodes.Hair.skeleton}
            castShadow
            receiveShadow
            userData={{ isHitbox: true }}
            onClick={(e) => handleHitboxClick(e, 'Cabello')}
          />
          <skinnedMesh
            name="Shoes"
            geometry={nodes.Shoes.geometry}
            material={materials.ShoesMaterial}
            skeleton={nodes.Shoes.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Top"
            geometry={nodes.Top.geometry}
            material={materials.TopMaterial}
            skeleton={nodes.Top.skeleton}
            castShadow
            receiveShadow
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/Quiz/ModelPruebas.glb')