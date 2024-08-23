import { ReactNode } from "react";

export interface ModalProps {
    reference: any;
    children?: ReactNode;
  }

const Modal: React.FC<ModalProps> = ({ reference, children }: ModalProps) => {
    return (
        <dialog ref={reference} onClick={() => {reference.current?.close()}}>
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </dialog>
    )
}

export default Modal;