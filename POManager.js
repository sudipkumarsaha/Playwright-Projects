import { test, expect } from "@playwright/test";
import {Locator, page} from "@playwright/test";
import { loginUser } from "./loginUser";

export class POManager
{

    constructor(page)
    {
        this.page=page;
        this.userLogin = new loginUser(this.page);
    }

    async getloginUser()
    {
        return this.userLogin();

    }
}

