import * as Redux from "redux"

import * as models from "../models/requestInterface"

export const Type = {
    LoadApprove: "LoadApprove",
}

export interface DesignFormAction extends Redux.Action {
    type: any,
    design: models.IDesignData
}

export const loadApprove = (design: models.IDesignData): DesignFormAction => {
    return {
        type: Type.LoadApprove,
        design: design
    }
}
