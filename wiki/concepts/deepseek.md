---
title: DeepSeek
aliases: [DeepSeek-R1, DeepSeek-V3]
tags: [rengong-zhineng, shanzhai, sinofuturism]
created: 2026-06-01
updated: 2026-06-01
---

DeepSeek — Chinese AI lab founded in 2023 by Liang Wenfeng, based in Hangzhou (a spinoff of quantitative hedge fund High-Flyer). Its January 2025 release of the R1 reasoning model caused significant disruption to US technology markets and reignited debate about Chinese AI capability.

## The Moment

DeepSeek-R1's release in early 2025 demonstrated that a relatively unknown Chinese lab, operating under US chip export restrictions (limited to older NVIDIA H800 hardware), could produce a model competitive with the leading US frontier models at a fraction of the cost. The response in Western markets was described as "panic": Nvidia's stock dropped precipitously as the assumption that AI leadership required exponentially expensive compute was suddenly in question.

Bratton describes it as "Street AI: fast, cheap, good, and easy to use, and it made the supposedly 'open' Western way of doing things look downright bloated and locked down in comparison."

## The Shanzhai Logic

DeepSeek is the clearest contemporary example of [[shanzhai]] operating at the AI frontier:

- **Constraint as innovation**: chip restrictions forced algorithmic efficiency improvements that proved superior to brute-force scaling
- **Open source release**: weights released publicly, making the innovation immediately uncontainable and globally available — once released into the world, it cannot be recalled
- **Implementation over invention**: the core techniques (transformer architecture, reinforcement learning from human feedback) were developed primarily in the US; DeepSeek's contribution was to make them work better, cheaper, on inferior hardware

This follows Bratton's "Four New Implementations" pattern: not inventing but deploying at scale and with superior efficiency.

## Technical Significance

DeepSeek's key innovations:

- **Mixture of Experts (MoE) architecture**: activating only a subset of parameters per query, dramatically reducing inference cost
- **Multi-head Latent Attention**: reduces memory requirements during inference
- **Reinforcement learning with verifiable rewards**: R1 was trained using process reward models that could verify reasoning steps, enabling chain-of-thought reasoning without massive human labeling

The chain-of-thought output — showing its reasoning steps — proved both technically useful and culturally striking: DeepSeek "thinks out loud" in ways that made its reasoning legible and teachable.

## Geopolitical Dimensions

The chip ban intended to prevent China from developing cutting-edge AI had the unintended consequence of forcing algorithmic innovation that may ultimately be more significant than raw compute scaling. This is the structural irony: "The West's fears, scepticism, and punitive approach has paradoxically helped to enable the development of a distinct and competitive Chinese media environment" (Greenspan & Konior).

Bratton notes DeepSeek's potential to strengthen Hangzhou — already home to Alibaba — as the next Shenzhen: an epicenter of computational culture built through constraint and efficiency rather than resource abundance.

## Tagline

DeepSeek's company tagline: **迈向未知** (mài xiàng wèi zhī) — "Into the Unknown." A fitting description of a lab more interested in AGI than commercial applications.

## Sources

- [[machine-decision-intro]] — Greenspan & Konior on DeepSeek and the shanzhai mode
- [[machine-decision-afterword]] — Bratton on DeepSeek as "Street AI" and the reverse Needham paradox
- See also: [[shanzhai]], [[rengong-zhineng]], [[sinofuturism]], [[alphago]]
