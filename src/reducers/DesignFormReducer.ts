import { IDesignData } from "../models/requestInterface"
import { designFormActions } from "../actions"


const DesignFormReducer = (state: IDesignData, action: designFormActions.DesignFormAction): IDesignData => {
    state = state || {};
    switch (action.type) {
        case designFormActions.Type.LoadApprove:
            {
                return action.design;
            }
    }
    return state;
}


export default DesignFormReducer;
