import { NextRequest, NextResponse } from "next/server";

export function  middleware(req: NextRequest){
    const cookie = req.cookies.get('Access')
    const url = req.nextUrl.pathname

    if(url.includes("/home") || url.includes("/students")){
        if(!cookie){
            return NextResponse.redirect("http://localhost:3000/")
        }
    }

}