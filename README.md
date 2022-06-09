<p align="center">
  <a href="https://gist.github.com/bokub/1cc900d92b9acc15786d7553b46a2cdf">
    <img src="https://raw.githubusercontent.com/bokub/github-stats-box/images/screenshot.png">
  </a>
  <h3 align="center">github-stats-box</h3>
  <p align="center">⚡️📌 Update a pinned gist to contain your GitHub stats!</p>
</p>

---

## Prep work

1. Create a new public GitHub Gist (https://gist.github.com/new)
2. Create a token with the `gist` and `repo` scopes and copy it (https://github.com/settings/tokens/new)

## Project setup

1. Fork this repository
2. From your new fork, go to **Settings > Secrets**
3. Add the following secret using the **New secret** button:

    - **GH_TOKEN:** The GitHub token generated above.

4. Go to the **Actions** tab of your fork and click the "enable" button
5. Edit the environment variables at the end of the file `.github/workflows/run.yml`

    - **GIST_ID:** The ID portion from your gist url: `https://gist.github.com/bokub/`**`1cc900d92b9acc15786d7553b46a2cdf`**.
    - **ALL_COMMITS:** Boolean value, If `true` it will count all commits instead of last year commits
    - **K_FORMAT:** Boolean value, If `true`, large numbers values will be formatted with a "k", for example `1.5k`

That's it! You gist will be updated immediately, and every 12 hours after that
