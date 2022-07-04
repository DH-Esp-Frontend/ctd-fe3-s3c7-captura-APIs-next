import { NextRequest, NextResponse } from "next/server";

export function  middleware(req: NextRequest){
    const cookie = req.cookies.get('Role')
    const url = req.nextUrl.pathname

    if(url.includes("/home") || url.includes("/students")){
        if(!cookie){
            return NextResponse.redirect("http://localhost:3000/")
        }
    }
    if(url.includes("/students")){
        if(cookie !== "Profesor"){
            return NextResponse.redirect("http://localhost:3000/home")
        }
    }
    return NextResponse.next()

}