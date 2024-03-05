import {createPortal} from "react-dom";
import {
	useEffect,
	useRef
}                     from "react";

export function Modal({children, open, className = "", onClose}) {
	
	const dialog = useRef(null);
	
	useEffect(() => {
		const modal = dialog.current;
		
		if (open) {
			modal.showModal();
		}
		return () => modal.close();
	}, [open]);
	
	return createPortal(<dialog
		ref={dialog}
		className={`modal ${className}`}
		onClose={onClose}
	>
		{children}
	</dialog>, document.getElementById("modal"))
}