export type TModal = {
    onClose: () =>  void;
    open:           boolean;
    children:       ReactNode;
}