export interface IBlockitAction {
    appId: string;
    actionId: string;
    type: string;
    payload: object;
    messageId?: string;
    triggerId?: string;
}
