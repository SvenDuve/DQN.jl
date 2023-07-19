using DQN
using Documenter

DocMeta.setdocmeta!(DQN, :DocTestSetup, :(using DQN); recursive=true)

makedocs(;
    modules=[DQN],
    authors="Sven Duve <svenduve@gmail.com> and contributors",
    repo="https://github.com/SvenDuve/DQN.jl/blob/{commit}{path}#{line}",
    sitename="DQN.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://SvenDuve.github.io/DQN.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
    ],
)

deploydocs(;
    repo="github.com/SvenDuve/DQN.jl",
    devbranch="main",
)
