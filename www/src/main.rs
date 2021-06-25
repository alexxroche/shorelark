use actix_files::NamedFile;
use actix_web::middleware::Logger;
use actix_web::{HttpRequest, Result};
use std::path::PathBuf;

pub const NIL: &'static str = "\x1b[0m"; // reset/remove colour
pub const INF: &'static str = "\x1b[1;32m"; // info
pub const WRN: &'static str = "\x1b[1;33m"; // HLT/warn
pub const CYN: &'static str = "\x1b[1;36m"; // cyan

/// https://actix.rs/docs/static-files/
async fn index(_req: HttpRequest) -> Result<NamedFile> {
    let path: PathBuf = "./public_html/index.html".parse().unwrap();
    Ok(NamedFile::open(path)?)
}
async fn favicon(_req: HttpRequest) -> Result<NamedFile> {
    // we could search ./public_html for favicon.ico
    let path: PathBuf = "./public_html/favicon.png".parse().unwrap();
    Ok(NamedFile::open(path)?)
}
async fn cached(_req: HttpRequest) -> Result<NamedFile> {
    let filename = _req.path();
    // don't need to check that it only has [.a..zA..Z0..1] and no [;..\/] or other shenanigans
    // because we will only be routed here in App::new() matches
    let path: PathBuf = format!("./public_html{}", filename).parse().unwrap();
    Ok(NamedFile::open(path)?)
}
arync fn cached_static(_req: HttpRequest) -> Result<NamedFile> {
    let filename = _req.path();
        println!("{:?}", filename);
    // don't need to check that it only has [.a..zA..Z0..1] and no [;..\/] or other shenanigans
    // because we will only be routed here in App::new() matches
    let path: PathBuf = format!("./public_html{}", filename).parse().unwrap();
    Ok(NamedFile::open(path)?)
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    use actix_web::{web, App, HttpServer};

    // to enable logging: actix_web=info
    std::env::set_var("RUST_LOG", "actix_web=error");
    env_logger::init();

    let ip_and_port = "[::1]:8765";
    println!("{}[{}i{}]{} Binding to{}: http://{}/",  WRN, INF, WRN, CYN, NIL, ip_and_port);

    // run the web server
    HttpServer::new(|| {
        App::new()
            .wrap(Logger::default())
            .wrap(Logger::new("%a %{User-Agent}i"))
            .route("", web::get().to(index))
            .route("/", web::get().to(index))
            .route("/index.html", web::get().to(index))
            .route("/static/{file_name}", web::get().to(cached_static))
            .route("/app.js", web::get().to(cached))
            .route("/app.css", web::get().to(cached))
            .route("/favicon.ico", web::get().to(favicon))
            .route("/bootstrap.js", web::get().to(cached))
            .route("/0.bootstrap.js", web::get().to(cached))
            .route("/d1162dfd10b80975006b.module.wasm", web::get().to(cached))
            // for wasm we should make this search the wasm output directory
            // possibly limited by bootstrap?
    })
    .bind(ip_and_port)?
    .run()
    .await
}
