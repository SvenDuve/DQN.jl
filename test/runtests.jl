using DQN
using RLTypes
using Flux
using Test

@testset "DQN.jl" begin
    # Write your tests here.
    q_func = set_q_function(1, 1)
    @test q_func isa Flux.Chain{Tuple{Flux.Dense{typeof(NNlib.relu), Matrix{Float32}, Vector{Float32}}, Flux.Dense{typeof(NNlib.relu), Matrix{Float32}, Vector{Float32}}, Flux.Dense{typeof(identity), Matrix{Float32}, Vector{Float32}}}}
    @test q_func([0.f0]) == [0.0]
end
